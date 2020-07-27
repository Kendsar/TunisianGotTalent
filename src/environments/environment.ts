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
  entreprise:{
    getAll:"/tgt/sponsoring/afficherEntreprise"
  },
  talent: {
    profil: {
      getAll: "/tgt/talent/profil/getAll",
      getById: "/tgt/talent/profil/relatedToProfile/{0}",
      delete: "/tgt/talent/profil/delete/{0}",
      create: "/tgt/talent/profil/create",
      edit: "/tgt/talent/profil/edit",
      alreadyHaveProfil: "/tgt/talent/profil/profilByUSerID/{0}"
    },
    rating: {
      getAll: "/tgt/talent/rating/getAll",
      getById: "/tgt/talent/rating/getByProfilId/{0}",
      delete: "/tgt/talent/rating/delete/{0}",
      create: "/tgt/talent/rating/rate",
      edit: "/tgt/talent/rating/edit",
      getByProfilUserId: '/tgt/talent/rating/getByProfilUserId/{0}/{1}'
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
    rating: {
      getById: "/tgt/ratingEvent/{0}",
      create: "/tgt/ratingEvent/new",
      getByEventUserID: "/tgt/ratingEvent/show/{0}/{1}",
    },
    favoris: {
      getAll: "/tgt/favoris/{0}",
      alreadyInFavorite: "/tgt/favoris/show/{0}/{1}",
      delete: "/tgt/favoris/delete/{0}/{1}",
      create: "/tgt/favoris/new/{0}/{1}",
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
      getparticipationByEventUserID: "/tgt/participer/show/{0}/{1}",
      delete: "/tgt/participer/delete",
      create: "/tgt/participer/new",
    },
  },
  competition: {
    getAll: '/tgt/competition/getAll',
    newMock: '/tgt/competition/newMock',
    createCompetition: '/tgt/competition/create',
    editCompetition: '/tgt/competition/{0}/edit',
    deleteCompetition: '/tgt/competition/delete/{0}'
  },
  business: {},
  forum: {
    getAll: "/tgt/articles"
  }
};
