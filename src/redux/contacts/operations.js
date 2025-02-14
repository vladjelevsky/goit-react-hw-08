import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastSuccess, toastError } from "../../helpers/toastConfig";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", body);
      toastSuccess("Contact successfully added!");
      return data;
    } catch (error) {
      toastError("Error adding contact.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      toastSuccess("Contact successfully deleted!");
      return data.id;
    } catch (error) {
      toastError("Error deleting contact.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ contactId, body }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${contactId}`, body);
      toastSuccess("Contact successfully updated!");
      return data;
    } catch (error) {
      toastError("Error updating contact.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
