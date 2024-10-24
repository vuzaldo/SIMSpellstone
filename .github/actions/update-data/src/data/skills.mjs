import { getScriptFromGithub } from './getScriptFromGithub.mjs';
import { getJsonFromSynapse } from './getXmlFromSynapse.mjs';
import { stableStringify } from './stableStringify.mjs';

var skillSeedData = {
  "protect_seafolk": {
    name: "Barrier",
    desc: "Reduces the next Damage dealt to a random allied creature",
    icon: "mystic_barrier",
    type: "activation",
  }
};
var json = getScriptFromGithub('skillTypes.jsonc');
json = json.replace(/\/\/.*/g, '').replace(/^\w+$/g, '');
var skillTypes = JSON.parse(json);

var skillRenames = {
  'confuse': 'Confuse', // not "Confusion"
  'wingward': 'Wing Ward'
};
var iconRemappings = {
  'reinforce': 'reinforce',
  'mark': 'eagle_eye',
  'barrage': 'barrage',
  'protect_ice': 'iceshatter',
  'counterburn': 'counterburn',
  'counterpoison': 'poisonhide',
  'slow': 'bind',
  'enlarge': 'empower',
  'unearth': 'reanimate',
  'magicfield': 'antimagicfield'
};

var skillsJson;

export async function getSkillsJs() {
  skillsJson = await getSkillsJson();
  var jsFile = '"use strict"\n\n' +
    'var SKILL_DATA = ' + stableStringify(skillsJson, null, '\t') + ';';
  return jsFile;
}

async function getSkillsJson() {
  var json = skillSeedData;
  await getJsonFromSynapse('cards_config.xml', {
    rootNodes: ['skillType'],
    rawRootMaps: {
      skillType: function ([name, skill]) {
        const id = skill.id;
        if (['displayEffect', '0'].includes(id.toString())) return;
        json[id] = {
          desc: skill.desc,
          icon: (iconRemappings[id] || skill.icon),
          name: (skillRenames[id] || skill.name),
          order: parseFloat(skill.order),
          type: (skillTypes[id] || (skill.upkeep ? 'earlyActivation' : 'activation'))
        };
      }
    }
  });
  return json;
}
