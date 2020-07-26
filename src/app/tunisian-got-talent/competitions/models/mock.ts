import { Competition } from "./competition.model";

export const COMPETITION_MOCK: Competition[] = [
    {
        id: 0,
        nom:  'Competition de Talents divers',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a vehicula nisl. Ut tempor nibh eros, eget blandit erat pulvinar porta. Vestibulum erat libero',
        date_debut:  '2020-08-21',
        date_fin:  '2020-08-26',
        nb_participant:  56,
        nb_max_participant: 100,
        comp_type: 'Talents divers'
    },
    {
        id: 1,
        nom:  'Competition 2',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a vehicula nisl. Ut tempor nibh eros, eget blandit erat pulvinar porta. Vestibulum erat libero',
        date_debut:  '2020-07-21',
        date_fin:  '2020-07-21',
        nb_participant:  25,
        nb_max_participant: 100,
        comp_type: 'Dessin'
    },
    {
        id: 2,
        nom:  'Competition 3',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a vehicula nisl. Ut tempor nibh eros, eget blandit erat pulvinar porta. Vestibulum erat libero',
        date_debut:  '2020-07-21',
        date_fin:  '2020-07-21',
        nb_participant:  19,
        nb_max_participant: 100,
        comp_type: 'Art'
    },
    {
        id: 3,
        nom:  'Competition 4',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a vehicula nisl. Ut tempor nibh eros, eget blandit erat pulvinar porta. Vestibulum erat libero',
        date_debut:  '2020-09-21',
        date_fin:  '2020-07-21',
        nb_participant:  100,
        nb_max_participant: 100,
        comp_type: 'Danse'
    },
    {
        id: 4,
        nom:  'Sing Competition',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a vehicula nisl. Ut tempor nibh eros, eget blandit erat pulvinar porta. Vestibulum erat libero',
        date_debut:  '2020-06-21',
        date_fin:  '2020-07-21',
        nb_participant:  100,
        nb_max_participant: 100,
        comp_type: 'Chant'
    },
    {
        id: 5,
        nom:  'Competition de magie',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a vehicula nisl. Ut tempor nibh eros, eget blandit erat pulvinar porta. Vestibulum erat libero',
        date_debut:  '2020-06-21',
        date_fin:  '2020-07-21',
        nb_participant:  100,
        nb_max_participant: 100,
        comp_type: 'Spectacle de magie'
    },
    {
        id: 5,
        nom:  'Performance de spectacle',
        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a vehicula nisl. Ut tempor nibh eros, eget blandit erat pulvinar porta. Vestibulum erat libero',
        date_debut:  '2020-06-21',
        date_fin:  '2020-07-21',
        nb_participant:  100,
        nb_max_participant: 100,
        comp_type: 'Performance de spectacle'
    },
]