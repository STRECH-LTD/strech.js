export declare const MemphisErrors: {
    IncorrectBatchSize: (maxBatchSize: number) => Error;
    GivenBothPartitionNumAndKey: Error;
    InvalidJSONSchema: Error;
    InvalidAVROSchema: Error;
    DeadConnection: Error;
    NegativeStartConsumeFromSeq: Error;
    InvalidLastMessages: Error;
    GivenBothLastMessagesAndStartConsume: Error;
    ProducingWithoutConnection: Error;
    FetchingWithoutConnection: Error;
    UnsupportedSchemaType: Error;
    UnsupportedSchemaNameChars: Error;
    InvalidSchemaNameStartOrEnd: Error;
    EmptySchemaName: Error;
    SchemaNameTooLong: Error;
    InvalidHeaderKeyNameStart: Error;
    DeserializationFailure: (ex: Error) => Error;
    CannotDelayDLSMsg: Error;
    UnsupportedHeaderFormat: Error;
    FailedToProduce: Error;
    ExpectingJSONFormat: (ex: Error) => Error;
    UnsupportedMessageType: Error;
    ExpectingAVROFormat: (ex: Error) => Error;
    FailedSchemaValidation: (toPrint: any) => Error;
};
