export interface FitmentResponse {
    type: string;
    status: string;
    success: boolean;
    make?: string[];
    model?: string[];
    trim?: string[];
    year?: string[];
}