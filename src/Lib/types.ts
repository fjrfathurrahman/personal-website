export type Action =
    | { type: 'SET_VALUES'; payload: { name: string; email: string; subject: string; message: string } }
    | { type: 'SET_SUCCESS'; payload: boolean }
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_RESULT'; payload: any };

export interface State {
    values: { name: string; email: string; subject: string; message: string };
    isSuccess: boolean;
    isLoading: boolean;
    result: any;
}