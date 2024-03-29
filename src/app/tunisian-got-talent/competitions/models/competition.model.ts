export class Competition {
    id: number;
    nom: string;
    description: string;
    date_debut: string;
    date_fin: string;
    nb_participant: number;
    nb_max_participant: number;
    comp_type: string;
}

export class CompetitionRate {
    compId?: any;
    connectedUserId?: any;
    rateValue?: any;
  }