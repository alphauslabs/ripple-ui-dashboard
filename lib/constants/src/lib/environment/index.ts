const APP_PATH = 'ripple';

export const EnvironmentConfig: ConfigType = {
  appSubDomain: {
    alphaus: {
      app: 'prod',
      next: 'next',
      appdev: 'dev',
      login: 'prod',
      loginnext: 'next',
      logindev: 'dev',
    },
    mobingi: {
      app: 'prod',
      appdev: 'dev',
      login: 'prod',
      logindev: 'dev',
    },
  },
  apiUrl: {
    alphaus: {
      basic: {
        prod: `https://api.alphaus.cloud/m/${APP_PATH}`,
        next: `https://apinext.alphaus.cloud/m/${APP_PATH}`,
        dev: `https://apidev.alphaus.cloud/m/${APP_PATH}`,
        localhost: `http://localhost:{port}/m/${APP_PATH}`,
      },
      blue: {
        prod: `https://api.alphaus.cloud/m/blue/`,
        next: `https://apinext.alphaus.cloud/m/blue/`,
        dev: `https://apidev.alphaus.cloud/m/blue/`,
        localhost: `http://localhost:{port}/m/blue/`,
      },
      login: {
        prod: `https://login.alphaus.cloud/${APP_PATH}/`,
        next: `https://loginnext.alphaus.cloud/${APP_PATH}/`,
        dev: `https://logindev.alphaus.cloud/${APP_PATH}/`,
        localhost: `http://localhost:{port}/${APP_PATH}`,
      },
      auth: {
        prod: `https://api.alphaus.cloud/m/auth/rbac/`,
        next: `https://apinext.alphaus.cloud/m/auth/rbac/`,
        dev: `https://apidev.alphaus.cloud/m/auth/rbac/`,
        localhost: `http://localhost:{port}/m/auth/rbac/`,
      },
      status: {
        prod: `https://api.alphaus.cloud/m/status/`,
        next: `https://apinext.alphaus.cloud/m/status/`,
        dev: `https://apidev.alphaus.cloud/m/status/`,
        localhost: `http://localhost:{port}/m/status/`,
      },
      users: {
        prod: `https://api.alphaus.cloud/m/u/users/`,
        next: `https://apinext.alphaus.cloud/m/u/users/`,
        dev: `https://apidev.alphaus.cloud/m/u/users/`,
        localhost: `http://localhost:{port}/m/u/users/`,
      },
      mfa: {
        prod: `https://api.alphaus.cloud/m/mfa/`,
        next: `https://apinext.alphaus.cloud/m/mfa/`,
        dev: `https://apidev.alphaus.cloud/m/mfa/`,
        localhost: `http://localhost:{port}/m/mfa/`,
      },
      ripple: {
        prod: `https://api.alphaus.cloud/m/ripple/`,
        next: `https://apinext.alphaus.cloud/m/ripple/`,
        dev: `https://apidev.alphaus.cloud/m/ripple/`,
        localhost: `http://localhost:{port}/m/ripple/`,
      },
    },
    mobingi: {
      basic: {
        prod: `https://service.mobingi.com/m/${APP_PATH}`,
        dev: `https://servicedev.mobingi.com/m/${APP_PATH}`,
        next: 'REMEMBE TO FILL THIS LATER',
        localhost: `http://localhost:{port}/m/${APP_PATH}`,
      },
      blue: {
        prod: `https://api.alphaus.cloud/m/blue/`,
        next: `https://apinext.alphaus.cloud/m/blue/`,
        dev: `https://apidev.alphaus.cloud/m/blue/`,
        localhost: `http://localhost:{port}/m/blue/`,
      },
      login: {
        prod: `https://login.mobingi.com/${APP_PATH}/`,
        dev: `https://logindev.mobingi.com/${APP_PATH}/`,
        next: 'REMEMBE TO FILL THIS LATER',
        localhost: `http://localhost:{port}/${APP_PATH}`,
      },
      auth: {
        prod: `https://service.mobingi.com/m/auth/rbac/`,
        dev: `https://servicedev.mobingi.com/m/auth/rbac/`,
        next: 'REMEMBE TO FILL THIS LATER',
        localhost: `http://localhost:{port}/m/auth/rbac/`,
      },
      status: {
        prod: `https://service.mobingi.com/m/status/`,
        dev: `https://servicedev.mobingi.com/m/status/`,
        next: 'REMEMBE TO FILL THIS LATER',
        localhost: `http://localhost:{port}/m/status/`,
      },
      users: {
        prod: `https://service.mobingi.com/m/u/users/`,
        dev: `https://servicedev.mobingi.com/m/u/users/`,
        next: 'REMEMBE TO FILL THIS LATER',
        localhost: `http://localhost:{port}/m/u/users/`,
      },
      mfa: {
        prod: `https://service.mobingi.com/m/mfa/`,
        dev: `https://servicedev.mobingi.com/m/mfa/`,
        next: 'REMEMBE TO FILL THIS LATER',
        localhost: `http://localhost:{port}/m/mfa/`,
      },
      ripple: {
        prod: `https://api.alphaus.cloud/m/ripple/`,
        next: `https://apinext.alphaus.cloud/m/ripple/`,
        dev: `https://apidev.alphaus.cloud/m/ripple/`,
        localhost: `http://localhost:{port}/m/ripple/`,
      },
    },
  },
  clientId: {
    alphaus: {
      localhost: ``,
      prod: 'ripple|ehtqmG5tQCNDJmM6IowCaBeaHbyuWOPpfI8WXCw7DH3basDX8Mwt6BdEQEqE',
      next: 'ripple|mxJLCYmjVBvJtfGwrBHQrSMsV3JrPpmuyXiy7hHmqjEQC7jWBsvwFbcPKfU57y82MUwgU7ioZGiLzAaqwDuGo8',
      dev: 'ripple|kpuingnf05xq08uerwxopnbrab17swhq3bu87nid1etabde12h3vdikkjqti',
    },
    mobingi: {
      localhost: ``,
      prod: 'ripple|ehtqmG5tQCNDJmM6IowCaBeaHbyuWOPpfI8WXCw7DH3basDX8Mwt6BdEQEqE',
      dev: 'ripple|kpuingnf05xq08uerwxopnbrab17swhq3bu87nid1etabde12h3vdikkjqti',
      next: 'REMEMBE TO FILL THIS LATER',
    },
  },
  clientSecret: {
    alphaus: {
      localhost: ``,
      prod: '24MdbtcvDKeSyQVcXW2SiVBcvR0DQ5a67ddBWRju8LcMYgDaMv061ngLB3BGxBVvHIUOocO7iMNDawEUkqpk013QvjwitRjcYp1rLdB3FFm3gGKSU8AE6A4UTxGFjyyuvHosdBuGKQuPN62EQU0llvlT6vhLsHmP3f1QR1B4uoEOEL7lTTOgQBQwlholXJMyJ0Q6MsMa12eGYFf0QU8vF4sMjxYkbXU4AdgPWffpmG5vvcjMwMeXowSFS7Hu73neYgXfOYSiqwleDbLVFwWeXKhYv6VGG3PA1cVw7PjS0X1BlKFUHhqPN3ew03rYdSJCGobgBSjlqwogOKB46EJXCj0sgafvSEDbh4wnYQdyspfST84Ixe5kNbbaDRnCkpX7fSfQCnKGeAwKtEhjmmqX8eNye5I3cNClDr5b5uAJPKtEy2kaqAhfjOGDB3jVyp7MYeMNv63TRCeybTVewF8JPc0i7kJbFc2JyHdqE5ioq16oU7b8iaL1',
      next: 'WUAhWSEXk9quBBEK28W2hhL6s9mt8pXWcpasTBttXHVwhhaeqKzXxMzFkGgT2TufU7a8MCzV3wXiBFtdPMKhhEQtc2TrJvbmvc7zVaDFfc7XKx2NpZDk5hNNfMcCT4JawggRweBeX2Kb95ihRGywPo332hDRjJjaEEnYUnJA5ssvJztaHtGqZ66Ypcc8KyiCWbjSoUFKgMCLxeE8iGEhZwdiVVNT8gAasRbEa96zV3kf53G8KgCm7Mbx9jWumhru',
      dev: 'QQiBPdeECTWvNmSBiCVrybJKY4gwGmsOP7CoWKxb4JSXUOksML6HsTSJicdFyXmV3BMfWHj6h1Rawnw7X75ArOR2TXFT1EKNnP0cia2EU817Ca2iPMV0p8JjWjJd3YkqtfQvWx4fl1xde1XgeiusYUCbsHKpCvoEsMRaVHHNjThlNNY84RYGYPC8ksMGNymHaSg2eBmXR3CCgWDm4GMp8GgP0op34ROdiY4dIYcbGVIOnsV2qt5og75ER7viFFTTsJV0RODpc4d140T66jXLOQemO3eJCLvpnJkrrb6eCIRgJYF61jnTchQAwqOnQllJjoDVl5XA6GaH1VL6MVBmcJyU8qORQOBIxgidlJgPdMfK6Rh1yBkeTW57YrurJX1vUyPVX36vRvpsj8FsjMJgt3y5jpDYoYSCupDHJJhU0hM7KyrCXsgssAAFPMe4KyHNXJUqocjeVsey1kuvcILWjWjVo0Fb6rf4',
    },
    mobingi: {
      localhost: ``,
      prod: '24MdbtcvDKeSyQVcXW2SiVBcvR0DQ5a67ddBWRju8LcMYgDaMv061ngLB3BGxBVvHIUOocO7iMNDawEUkqpk013QvjwitRjcYp1rLdB3FFm3gGKSU8AE6A4UTxGFjyyuvHosdBuGKQuPN62EQU0llvlT6vhLsHmP3f1QR1B4uoEOEL7lTTOgQBQwlholXJMyJ0Q6MsMa12eGYFf0QU8vF4sMjxYkbXU4AdgPWffpmG5vvcjMwMeXowSFS7Hu73neYgXfOYSiqwleDbLVFwWeXKhYv6VGG3PA1cVw7PjS0X1BlKFUHhqPN3ew03rYdSJCGobgBSjlqwogOKB46EJXCj0sgafvSEDbh4wnYQdyspfST84Ixe5kNbbaDRnCkpX7fSfQCnKGeAwKtEhjmmqX8eNye5I3cNClDr5b5uAJPKtEy2kaqAhfjOGDB3jVyp7MYeMNv63TRCeybTVewF8JPc0i7kJbFc2JyHdqE5ioq16oU7b8iaL1',
      dev: 'QQiBPdeECTWvNmSBiCVrybJKY4gwGmsOP7CoWKxb4JSXUOksML6HsTSJicdFyXmV3BMfWHj6h1Rawnw7X75ArOR2TXFT1EKNnP0cia2EU817Ca2iPMV0p8JjWjJd3YkqtfQvWx4fl1xde1XgeiusYUCbsHKpCvoEsMRaVHHNjThlNNY84RYGYPC8ksMGNymHaSg2eBmXR3CCgWDm4GMp8GgP0op34ROdiY4dIYcbGVIOnsV2qt5og75ER7viFFTTsJV0RODpc4d140T66jXLOQemO3eJCLvpnJkrrb6eCIRgJYF61jnTchQAwqOnQllJjoDVl5XA6GaH1VL6MVBmcJyU8qORQOBIxgidlJgPdMfK6Rh1yBkeTW57YrurJX1vUyPVX36vRvpsj8FsjMJgt3y5jpDYoYSCupDHJJhU0hM7KyrCXsgssAAFPMe4KyHNXJUqocjeVsey1kuvcILWjWjVo0Fb6rf4',
      next: 'REMEMBE TO FILL THIS LATER',
    },
  },
};

export type EnvType = 'prod' | 'next' | 'dev' | 'localhost';
export type AppType = 'alphaus' | 'mobingi';
export type ApiUrlKeys =
  | 'basic'
  | 'blue'
  | 'login'
  | 'auth'
  | 'status'
  | 'users'
  | 'mfa'
  | 'ripple';
export interface ApiUrlConfigType {
  basic: Record<EnvType, string>;
  blue: Record<EnvType, string>;
  login: Record<EnvType, string>;
  auth: Record<EnvType, string>;
  status: Record<EnvType, string>;
  users: Record<EnvType, string>;
  mfa: Record<EnvType, string>;
  ripple: Record<EnvType, string>;
}

export interface ConfigType {
  apiUrl: {
    [app in AppType]: ApiUrlConfigType;
  };
  appSubDomain: {
    [app in AppType]: {
      app?: EnvType;
      next?: EnvType;
      appdev?: EnvType;
      login?: EnvType;
      loginnext?: EnvType;
      logindev?: EnvType;
    };
  };
  clientId: Record<AppType, Record<EnvType, string>>;
  clientSecret: Record<AppType, Record<EnvType, string>>;
}

export interface ConfigResponseType {
  apiUrl: {
    [key in ApiUrlKeys]: string;
  };
  clientId: string;
  clientSecret: string;
}
