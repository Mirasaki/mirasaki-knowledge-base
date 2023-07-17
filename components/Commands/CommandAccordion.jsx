// Import from react-bootstrap
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// Fa Icons
import {
  FaExclamation,
  FaHourglass,
  FaAndroid,
  FaUserAlt,
  FaClone,
  FaIdCardAlt,
  FaExclamationTriangle
} from 'react-icons/fa';
import { sortCommandsByCategory, titleCase } from '../../utils';

// Mapping our argument types
const argumentTypeMap = {
  1: 'Sub Command',
  2: 'Sub Command Group',
  3: 'String',
  4: 'Integer',
  5: 'Boolean',
  6: 'User',
  7: 'Channel',
  8: 'Role',
  9: 'Mentionable',
  10: 'Number',
  11: 'Attachment'
};

// Mapping our permission levels
const permLevelMap = {
  0: 'User',
  1: 'Moderator',
  2: 'Administrator',
  3: 'Server Owner',
  4: 'Developer',
  5: 'Bot Owner'
};

export const CommandAccordionContent = ({ cmd, ...props }) => {
  const cooldownTypeStr = cmd.cooldown?.type === 'guild' ? 'Server' : titleCase(cmd.cooldown?.type ?? 'User');
  if (typeof cmd.permLevel === 'undefined') cmd.permLevel = 0
  return (
    <Accordion.Item id={cmd.data.name} className='command-accordion-item' eventKey={cmd.data.name} {...props} style={{
    }}>
      <Accordion.Header>
        {/* Command Disabled Exclamation Mark */}
        {cmd.enabled !== true && <FaExclamation style={{ color: 'red' }} />}
        {/* Command Name */}
        {' '}<strong>/</strong>{cmd.data.name}
      </Accordion.Header>

      {/*
        Card Body
        WITHIN Accordion Collapse
      */}
      <Accordion.Body color='light' bg="dark">
        {/* Description */}
        {cmd.data.description}
        <hr style={{ width: '100%' }}/>

        {/* Enabled */}
        {cmd.enabled !== true && <p>
          <FaExclamation style={{ color: 'red' }} />
          {' '} This command is currently disabled
        </p>}

        {/* Cooldown */}
        {cmd.cooldown && <p style={{
          display: 'flex',
          alignItems: 'center',
          gap: '.25rem'
        }}><FaHourglass style={{ color: 'skyblue' }} />
          {' '}[{cooldownTypeStr}] You can use this command {cmd.cooldown.usages === 1 ? 'once' : `${cmd.cooldown.usages} times`} every {cmd.cooldown.duration} seconds
        </p>}

        {/* Client Permissions */}
        {cmd.clientPerms?.length >= 1 && <p style={{
          display: 'flex',
          alignItems: 'center',
          gap: '.25rem'
        }}>
          <FaAndroid style={{ color: 'skyblue' }} />
          {' '} Client requires the following permission(s): {cmd.clientPerms.join(' - ')}
        </p>}

        {/* User Permissions */}
        {cmd.userPerms?.length >= 1 && <p style={{
          display: 'flex',
          alignItems: 'center',
          gap: '.25rem'
        }}>
          <FaUserAlt style={{ color: 'skyblue' }} />
          {' '} User requires the following permission(s): {cmd.userPerms.join(' - ')}
        </p>}

        {/* Aliases */}
        {cmd.aliases && cmd.aliases.length >= 1 && <p style={{
          display: 'flex',
          alignItems: 'center',
          gap: '.25rem'
        }}>
          <FaClone style={{ color: 'skyblue' }} />
          {' '}Aliases: /{cmd.aliases.join(', /')}
        </p>}

        {/* Permission Level */}
        <p style={{
          display: 'flex',
          alignItems: 'center',
          gap: '.25rem'
        }}>
          <FaIdCardAlt style={{ color:'skyblue' }} />
          {' '}Permission Level: {permLevelMap[cmd.permLevel]}
        </p>

        {/* Not Safe For Work */}
        {cmd.nsfw === true && <p style={{
          display: 'flex',
          alignItems: 'center',
          gap: '.25rem'
        }}>
          <FaExclamationTriangle style={{ color: 'red !important' }} />
          {' '} This command is <strong>NOT</strong> safe for work!
        </p>}

        {/* Command arguments / options */}
        {cmd.data.options?.length >= 1 && <>
          <hr />
          <p style={{ fontSize: 'large', marginBottom: '.25rem' }}>Options:</p>
          {cmd.data.options.map((arg) => (
            // Returning a badge with tooltip over for every argument
            <OverlayTrigger
              key={`${cmd.data.name}-${arg.name}`}
              placement='top'
              overlay={
                <Tooltip id={`${arg.name}-tooltip`}>
                  {arg.description}
                </Tooltip>
              }
            >
              <Badge bg={arg.required ? 'primary' : 'secondary'} style={{
                color: '#FFF',
                margin: '.2em'
              }}>
                {'autocomplete' in arg && arg.autocomplete
                  ? 'Auto-Complete'
                  : argumentTypeMap[arg.type] }: {arg.name
                }
              </Badge>
            </OverlayTrigger>
          ))}
        </>}

        {/* Argument Footer */}
        {cmd.data.options?.length >= 1 && <div>
          <hr/>
          <Badge bg='primary' style={{ color: '#FFF' }}>Required</Badge>
          {' '}<Badge bg='secondary' style={{ color: '#FFF' }}>Optional</Badge>
          <br />
          <p>Mouse-over (click on mobile) the available options for more information</p>
        </div>}
      </Accordion.Body>
    </Accordion.Item>
  );
}

// [DEV] - Fix BigInt permissions showing
const CommandAccordion = ({ commands }) => {
  if (!commands || !commands[0]) return (<>
    No command data received, please try again later
  </>);

  const categories = sortCommandsByCategory(commands)
  const sortedCommands = categories?.filter(({ category }) => category !== 'Developer');
  const firstCommand = sortedCommands[0].commands[
    sortedCommands[0].commands.length - 1
  ];
  return (
    <Accordion flush defaultActiveKey={firstCommand.data.name}>
      {/* Category loop */}
      {sortedCommands
        .map(({ category, commands }) => {
          const commandData = commands?.map((cmd) => (<CommandAccordionContent cmd={cmd} key={cmd.data.name}/>)).reverse();
          return (
            <div key={`${category}-commands`} style={{ marginBottom: '1.5rem' }}>
              {<h2>{category}</h2>}
              {commandData}
            </div>
          );
        })}
    </Accordion>
  );
};

export default CommandAccordion;
