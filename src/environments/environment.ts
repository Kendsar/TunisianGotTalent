// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
};

export const wsUrl = {
  authentification: {
    user: "tgt/talent/user/loginAdminUser",
  },
  talent: {
    profil: {
      getAll: "/tgt/talent/profil/getAll",
      getById: "/tgt/talent/profil/relatedToProfile/{0}",
      delete: "/tgt/talent/profil/delete/{0}",
      create: "/tgt/talent/profil/create",
      edit: "/tgt/talent/profil/edit",
    },
    rating: {
      getAll: "/tgt/talent/rating/getAll",
      getById: "/tgt/talent/rating/getByProfilId/{0}",
      delete: "/tgt/talent/rating/delete/{0}",
      create: "/tgt/talent/rating/rate",
      edit: "/tgt/talent/rating/edit",
    },
  },
  event: {},
  business: {},
  forum: {},
  competition: {},
};
