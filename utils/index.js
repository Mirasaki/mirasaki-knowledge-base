/**
 * String converter: Mary Had A Little Lamb
 * @param {string} str Any string of characters
 * @returns {string} The string in title-case format
 */
export const titleCase = (str) => {
  if (typeof str !== 'string') throw new TypeError('Expected type: String');
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  return str.join(' ');
};

/**
 * Sorts a collection of commands by command category
 * @param {external:DiscordCollection<string, ChatInputCommand | UserContextCommand | MessageContextCommand>} commands The collections of commands to sort
 * @returns {Array<Command>}
 */
export const sortCommandsByCategory = (commands) => {
  let currentCategory = '';
  const sorted = [];

  commands.forEach((cmd) => {
    const workingCategory = titleCase(cmd.category);

    if (currentCategory !== workingCategory) {
      sorted.push({
        category: workingCategory,
        commands: [ cmd ]
      });
      currentCategory = workingCategory;
    }
    else sorted
      .find((e) => e.category === currentCategory).commands
      .unshift(cmd);
  });
  return sorted;
};