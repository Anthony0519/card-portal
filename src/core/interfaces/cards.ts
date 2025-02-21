export interface cardProfileAttribute {
    id: number
    card_holder: string;
    masked_pan: number;
    expiration: string;
    batch: number;
    date_issued: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface cardRequestAttribute {
    id: number;
    branch_name: string;
    card_type: string;
    quantity: number;
    initiator: string;
    card_charges: number;
    batch: number;
    date_requested: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}