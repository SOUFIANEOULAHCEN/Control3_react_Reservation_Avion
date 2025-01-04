import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// export const fetchFlights = createAsyncThunk(
//   'flights/fetchFlights',
//   async (dateRange) => {
//     const response = await fetch('https://gahi-said.com/apis/vols.php')
//     if (!response.ok) {
//       throw new Error('Network response was not ok')
//     }
//     const data = await response.json()
//     return data
//   }
// )

export const fetchFlights = createAsyncThunk(
  'flights/fetchFlights',
  async (dateRange) => {
    const params = new URLSearchParams({
      startDate: dateRange?.start || '',
      endDate: dateRange?.end || ''
    });
    const response = await fetch(`https://gahi-said.com/apis/vols.php?${params}`);
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  }
)

const flightSlice = createSlice({
  name: 'flights',
  initialState: {
    flights: [],
    selectedFlight: null,
    services: [],
    status: 'idle',
    error: null,
    dateRange: {
      start: '',
      end: ''
    }
  },
  reducers: {
    selectFlight: (state, action) => {
      state.selectedFlight = action.payload
    },
    setDateRange: (state, action) => {
      state.dateRange = action.payload
    },
    addService: (state, action) => {
      state.services.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.flights = action.payload
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { selectFlight, setDateRange, addService } = flightSlice.actions
export default flightSlice.reducer

