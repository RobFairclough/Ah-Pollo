export interface Pin  {
        ID: number;
        UID: String
        CreatedOn: String
        CreatedByCompanyUserID: number;
        DrawingID: number;
        OperativeCode: String
        PinNumber: number;
        PinCode: String
        IsDeleted: Boolean
        DeviceID: String
        OldID: number;
}

export interface Drawing {
        ID: Number;
        FloorID: Number;
        CreatedOn: String;
        CreatedByCompanyUserID: Number;
        Name: String;
        IsArchived: Boolean;
        IsDeleted: Boolean;
        OwnerCompanyID: Number;
        ExpiresOn: String;
        PinsLastUpdatedOn: String;
        Sort: Number;
        OldID: Number;
        Pins?: Pin[];
}

export interface Alert {
        ID?: Number;
        CompanyID: Number;
        Message: String;
        CreatedOn: Date;
        CreatedByCompanyUserID: Number;
        SiteID?: Number;
        OperativeIDs: Number[];
    }