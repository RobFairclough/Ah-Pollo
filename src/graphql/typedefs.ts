import { gql } from 'apollo-server';
// typedefs
export const typeDefs = gql`
    # Comments in GraphQL are defined with the hash (#) symbol.

    type Location {
        x: Float
        y: Float
    }
    type Pin {
        ID: Int
        UID: String
        CreatedOn: String
        CreatedByCompanyUserID: Int
        DrawingID: Int
        OperativeCode: String
        PinNumber: Int
        PinCode: String
        IsDeleted: Boolean
        DeviceID: String
        OldID: Int
    }

    type Drawing {
        ID: Int
        FloorID: Int
        CreatedOn: String
        CreatedByCompanyUserID: Int
        Name: String
        IsArchived: Boolean
        IsDeleted: Boolean
        OwnerCompanyID: Int
        ExpiresOn: String
        PinsLastUpdatedOn: String
        Sort: Int
        OldID: Int
        Pins: [Pin]
    }

    # The "Query" type is the root of all GraphQL queries.
    # (A "Mutation" type will be covered later on.)
    type Query {
        pins: [Pin]
        singlePin(ID: Int!): Pin
        drawings: [Drawing]
        singleDrawing(ID: Int!): Drawing
        getDrawingWithPins(ID: Int!): Drawing
    }
`;
