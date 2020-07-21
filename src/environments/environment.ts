// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
};

export const wsUrl = {
  authentification: {
    user: "tgt/talent/user/loginUser",
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
    comment: {
      getCommentsByProfil: "/tgt/talent/comment/getCommentByProfil/{0}",
      addNewComment: "/tgt/talent/comment/createComment",
      editComment: "/tgt/talent/comment/editComment",
      delete: "/tgt/talent/comment/delete/{0}"
    },
    like: {
      getLikebyCommentUserID: "/tgt/talent/likes/getLikeByCommentUserID/{0}/{1}",
      like: '/tgt/talent/likes/like/{0}/{1}'
    }
  },
  event: {
    events: {
      getAll: "/tgt/event/getAll",
      getById: "/tgt/event/getById/{0}",
      delete: "/tgt/event/delete/{0}",
      create: "/tgt/event/create",
      edit: "/tgt/event/edit",
      search:"/tgt/event/search",
    },
    raiting: {
      getAll: "/tgt/ratingEvent/show",
      getById: "/tgt/ratingEvent/{0}",
      create: "/tgt/ratingEvent/new",
    },
    favoris: {
      getAll: "/tgt/favoris/{0}",
      getById: "/tgt/favoris/show",
      delete: "/tgt/favoris/delete",
      create: "/tgt/favoris/new",
    },
    category: {
      getAll: "/tgt/categoryevent/",
      getById: "/tgt/categoryevent/{0}/show",
      delete: "/tgt/category/{0}/delete",
      create: "/tgt/category/new",
      edit: "/tgt/category/{0}/edit",
    },
    participer: {
      getAll: "/tgt/participer/{0}",
      getById: "/tgt/participer/show",
      delete: "/tgt/participer/delete",
      create: "/tgt/participer/new",
    },
  },
  business: {},
  forum: {},
  competition: {},
};
