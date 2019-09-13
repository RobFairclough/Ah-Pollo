export interface Pin {
    ID: number;
    UID: string;
    CreatedOn: string;
    CreatedByCompanyUserID: number;
    DrawingID: number;
    OperativeCode: string;
    PinNumber: number;
    PinCode: string;
    IsDeleted: boolean;
    DeviceID: string;
    OldID: number;
}

export interface Drawing {
    ID: number;
    FloorID: number;
    CreatedOn: string;
    CreatedByCompanyUserID: number;
    Name: string;
    IsArchived: boolean;
    IsDeleted: boolean;
    OwnerCompanyID: number;
    ExpiresOn: string;
    PinsLastUpdatedOn: string;
    Sort: number;
    OldID: number;
    Pins?: Pin[];
}

export interface Alert {
    ID?: number;
    CompanyID: number;
    Message: string;
    CreatedOn: Date;
    CreatedByCompanyUserID: number;
    SiteID?: number;
    OperativeIDs: number[];
}
