import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem('pastes')
    ? JSON.parse(localStorage.getItem('pastes'))
    : [],
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex(p => p._id === paste._id);

      if(index >= 0) {
        toast.error('Paste already exists', {
          position: 'top-right',  
        });
        return;
      } 
      state.pastes.push(paste);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast.success('Paste added successfully', {
        position: 'top-right',  
      });
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex(p => p._id === pasteId);
      if(index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success('Paste removed successfully', {
          position: 'top-right',
        });
      } 
    },
    updatePastes: (state, action) => {
        const pasteId = action.payload._id;
        const index = state.pastes.findIndex(p => p._id === pasteId);
        if(index >= 0) {
          state.pastes[index] = action.payload;
          localStorage.setItem('pastes', JSON.stringify(state.pastes));
          toast.success('Paste updated successfully', {
            position: 'top-right',
          });
        } 
    },
    resetPaste: (state) => {
      state.pastes = [];
      localStorage.removeItem('pastes');
      toast.success('All pastes cleared', {
        position: 'top-right',
      });
    }
},
})

export const {addToPastes, updatePastes, removeFromPastes, resetPaste} = pasteSlice.actions
export default pasteSlice.reducer