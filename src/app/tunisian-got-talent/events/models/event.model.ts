export class Event {
  id_sp: number;
  id: number;
  titre: string;
  description: string;
  lieux: string;
  nbparticipant: number;
  imgSrc: string;
  userId: number;
  idcat: any;
  id_cat?: any;
}

export class Favoris {
  id: any;
  iduser: any;
  idevent?: any;

}

export class Participate {
  id?: any;
  id_user?: any;
  id_event?: any;
}

export class Rate {
  idevent?: any;
  iduser?: any;
  value?: any;
}
