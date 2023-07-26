import requestErrorReduser, { requestErrorSlice } from "../../../redux/reducers/requestErrorSlice";

import type { ReduxT } from "../../../types/redux";
import { AnyAction } from "@reduxjs/toolkit";

const { addError, clearErrorStorage } = requestErrorSlice.actions,
	initialState: ReduxT.RequestErrorsStateI = {
		errors: []
	};

describe("requestErrorSlice", () => {
	it("should return default state when passed an ampty action", () => {
		const result = requestErrorReduser(undefined, { type: "" });

		expect(result).toEqual(initialState);
	});

	it('should add new error in state with "addError" action', () => {
		const payload = "Error: A very terrible error!",
			action: AnyAction = { type: addError.type, payload: payload },
			result = requestErrorReduser(initialState, action);

		expect(result.errors[0]).toEqual("Error: A very terrible error!");
	});

	it('should clear error storage with "clearErrorStorage" action', () => {
		const action: AnyAction = { type: clearErrorStorage.type },
			result = requestErrorReduser(initialState, action);

		expect(result).toEqual(initialState);
	});
});
