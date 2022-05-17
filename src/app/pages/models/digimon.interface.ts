export interface DigimonInterface {
    name: string;
    img: string;
    level: Level;
}

export enum Level {
    Armor = "Armor",
    Champion = "Champion",
    Fresh = "Fresh",
    InTraining = "In Training",
    Mega = "Mega",
    Rookie = "Rookie",
    Training = "Training",
    Ultimate = "Ultimate",
}
