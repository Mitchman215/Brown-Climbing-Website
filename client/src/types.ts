// types for BasicUser Model
export type BasicUserType = {
    googleId: string;
    displayName: string;
    displayPictureURL: string;
};

// types for User Model
export type UserType = {
    _id: string;
    googleId: string;
    displayName: string;
    email: string;
    displayPictureURL: string;
    createdAt: Date;
    lastLoggedIn: Date;
    moderator: boolean;
};

// types for Event Model
export type EventType = {
    _id: string;
    eventTitle: string;
    description: string;
    hostUser: BasicUserType;
    location: string;
    startTime: Date;
    durationMinutes: number;
    transportInfo: string;
    registeredUsers: BasicUserType[];
    maxCapacity: number;
};

export type IdParams = {
    eventId: string;
};

export const locations = [
    "Gym 1",
    "Another one",
    "Yet another place",
    "Mount Everest",
];
