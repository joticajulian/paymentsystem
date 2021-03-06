const config = {
  'production': {
    RPC_NODES : [
      'https://api.steemit.com',
      'https://api.steem.house',
      'https://gtg.steem.house:8090',
      'https://appbasetest.timcliff.com',
      'https://rpc.steemviz.com',
      'https://steemd.minnowsupportproject.org',
      'https://steemd.privex.io',
      'https://rpc.usesteem.com',
      'https://anyx.io',
      'https://hive.anyx.io'
    ],
    IMAGE_HOSTER : 'https://cdn.eftg.eu',
    ELASTIC : 'https://api.eftg.eu/pulsar/',
    CDN : 'https://cdn.eftg.eu/',
    EFTG_HARDFORK_0_1 : false
  },
  'acceptance': {
    RPC_NODES : [
      'https://api.blkcc.xyz'
    ],
    IMAGE_HOSTER : 'https://cdn.acc.blkcc.xyz',
    ELASTIC : 'https://api.blkcc.xyz/pulsar/',
    CDN : 'https://cdn.acc.blkcc.xyz/',
    EFTG_HARDFORK_0_1 : false
  },
  'development': {
    RPC_NODES : [
      'https://api.steemit.com',
      'https://api.steem.house',
      'https://gtg.steem.house:8090',
      'https://appbasetest.timcliff.com',
      'https://rpc.steemviz.com',
      'https://steemd.minnowsupportproject.org',
      'https://steemd.privex.io',
      'https://rpc.usesteem.com',
      'https://anyx.io',
      'https://hive.anyx.io'
    ],
    IMAGE_HOSTER : 'https://cdn.dev.blkcc.xyz',
    ELASTIC : 'https://apidev.blkcc.xyz/pulsar/',
    CDN : 'https://cdn.dev.blkcc.xyz/',
    EFTG_HARDFORK_0_1 : true
  }
}

const environment = process.env.NODE_ENV || 'development';
const finalConfig = config[environment];

const SBD = 'SBD';
const STEEM = 'STEEM';
const SP = 'SP';
const VESTS = 'VESTS';

const HARDFORK = 20

const EXPLORER = '/explorer/'
const DSTEEM_TIMEOUT = 5000 //ms

const STEEM_ADDRESS_PREFIX = 'STM';
const STEEM_100_PERCENT = 10000;
const STEEM_VOTE_REGENERATION_SECONDS = 5 * 24 * 60 * 60;
const STEEM_INFLATION_RATE_START_PERCENT = 978;
const STEEM_INFLATION_NARROWING_PERIOD = 250000;
const STEEM_INFLATION_RATE_STOP_PERCENT = 95;
const STEEM_BLOCKS_PER_YEAR = (365 * 24 * 60 * 60) / 3;
const STEEM_BLOCKS_PER_DAY = (24 * 60 * 60) / 3;
const STEEM_SBD_START_PERCENT = 900;
const STEEM_SBD_STOP_PERCENT = 1000;

const MAP = {
  TOP_WITNESSES: 30,
  INI_POS : [50.5, 15], //latitude, longitude
  INI_ZOOM : 4 ,
}

const RESTAURANT_STEEM_ACCOUNT = 'pruebas' // steem account

const APP_VERSION = 'pulsar/1.5.3';

export default {

  RPC_NODES: finalConfig.RPC_NODES,
  IMAGE_HOSTER: finalConfig.IMAGE_HOSTER,
  ELASTIC: finalConfig.ELASTIC,
  CDN: finalConfig.CDN,
  
  SBD: SBD,
  STEEM: STEEM,
  SP: SP,
  VESTS: VESTS,
  HARDFORK: HARDFORK,
  
  EFTG_HARDFORK_0_1: finalConfig.EFTG_HARDFORK_0_1,

  EXPLORER,
  DSTEEM_TIMEOUT,

  STEEM_ADDRESS_PREFIX: STEEM_ADDRESS_PREFIX,
  STEEM_100_PERCENT: STEEM_100_PERCENT,
  STEEM_VOTE_REGENERATION_SECONDS: STEEM_VOTE_REGENERATION_SECONDS,
  STEEM_INFLATION_RATE_START_PERCENT: STEEM_INFLATION_RATE_START_PERCENT,
  STEEM_INFLATION_NARROWING_PERIOD: STEEM_INFLATION_NARROWING_PERIOD,
  STEEM_INFLATION_RATE_STOP_PERCENT: STEEM_INFLATION_RATE_STOP_PERCENT,
  STEEM_BLOCKS_PER_YEAR: STEEM_BLOCKS_PER_YEAR,
  STEEM_BLOCKS_PER_DAY: STEEM_BLOCKS_PER_DAY,
  STEEM_SBD_START_PERCENT: STEEM_SBD_START_PERCENT,
  STEEM_SBD_STOP_PERCENT: STEEM_SBD_STOP_PERCENT,

  MAP:MAP,
  
  RESTAURANT_STEEM_ACCOUNT,

  APP_VERSION: APP_VERSION,
};
