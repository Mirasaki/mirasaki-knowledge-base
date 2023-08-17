import Image from 'next/image'
import styles from './projects.module.css'
import { Link } from 'nextra-theme-docs'

const ProjectEntry = ({ id, name, imageSrc, url = null, disabled = true, imageProps = {} }) => (
  <div className={styles.projectEntry}>
    <Image
      src={imageSrc}
      alt='alt'
      width={25}
      height={25}
      style={{
        borderRadius: '5rem',
        ...imageProps
      }}
    />
    <Link href={disabled ? '/' : (
      url ?? `/docs/${id}`
    )} className={`${styles.projectLink} ${disabled ? styles.disabled : ''}`}>{name}</Link>
  </div>
)

export default function Projects() {
  return (
    <div className="mx-auto mb-10 w-[880px] max-w-full px-4 text-center">
      <div className={styles.projects}>
        <ProjectEntry
          name="Backup Manager"
          imageSrc='/images/projects/icons/backup-manager.png'
        />
        <ProjectEntry
          disabled={false}
          id={'remote-file-access-api'}
          name="Remote File Access API"
          imageSrc='/images/projects/icons/remote-file-access-api.png'
        />
        <ProjectEntry
          name="Discord Bot Template"
          imageSrc='/images/projects/icons/bot-template.png'
        />
        <ProjectEntry
          disabled={false}
          id={'cftools-discord-bot'}
          name="CFTools Discord Bot"
          imageSrc='/images/projects/icons/cftools.png'
        />
        <ProjectEntry
          name="DayZ Leaderboard NextJS"
          imageSrc='/images/projects/icons/next.png'
        />
        <ProjectEntry
          name="Expansion Market"
          imageSrc='/images/projects/icons/expansion-market.jpg'
        />
        <ProjectEntry
          disabled={false}
          id='gameshield'
          name="GameShield"
          url="/docs/gameshield-home"
          imageSrc='/images/projects/icons/gameshield.png'
        />
        <ProjectEntry
          disabled={false}
          id="gmt"
          url="/docs/gmt/overview"
          name="Green Mountain Trader"
          imageSrc={`/images/projects/icons/gmt-light.png`}
          imageProps={{ backgroundColor: 'black' }}
        />
        <ProjectEntry
          disabled={false}
          id="mitsuki"
          name="Mitsuki"
          imageSrc='/images/projects/icons/mitsuki.png'
        />
        <ProjectEntry
          name="Mirasaki Music Bot"
          imageSrc='/images/projects/icons/music-bot.jpg'
        />
      </div>
    </div>
  )
}
