import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    name: string;
    surname: string;
    phone_number: string;
    id: string;
    points_id: string[];
    isAuth: boolean;
}
const initialState: IInitialState = {
    name: "",
    surname: "",
    phone_number: "",
    id: "",
    points_id: [],
    isAuth: false,
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<any>) {
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            };
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
