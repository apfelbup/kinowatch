
import Select from 'react-select';
import { useAppDispatch } from '../../hooks/reduxhooks';
import { setGenre } from '../../redux/slices/movieSlice';

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    padding:"0px",
    marginTop:'0px',
    boxShadow: "none",
    border:'none',
    minWidth:"150px"
  }),

    option: (provided, state) => ({
      ...provided,
      fontWeight:"600",
      color: state.isSelected ? '#fff' : '#fff',
      backgroundColor: state.isSelected ? '#373737' : '#1D1D1D',
      cursor:'pointer',
      paddingTop:"10px",
      marginTop:'-5px',
      marginBottom:"-5px",
      "&:hover": {
        backgroundColor: state.isSelected ? '#373737' : '#474747'
      }
    }),
    control: (provided) => ({
      ...provided,
      border:'1px solid #1D1D1D',
      padding:"2px",
      fontSize:'17px',
      fontWeight:"600",
      borderRadius:'10px',
      cursor:'pointer',
      boxShadow: "none",
      color: '#fff',
      backgroundColor: "#222",
      "&:hover": {
        border:'1px solid #111',
      },
    }),
    menuList: (base) => ({
      ...base,
      "::-webkit-scrollbar": {
        width: "4px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "#f1f1f1"
      },
      "::-webkit-scrollbar-thumb": {
        background: "#888"
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555"
      },
    })
  }
  

const Selection = ({options, handler, filters=''}) => {

    const dispatch = useAppDispatch();

    if(filters.length) {
      handler(filters);
      dispatch(setGenre(''));
    }

    return (
        <Select 
        onChange={(e)=> {handler(e.value)}}
        defaultValue={filters.length
          ? {
            value: filters,
            label: filters
          } 
          : {
          value:options[0].value,
          label:options[0].name
      }} 
        styles = { customStyles } 
        options={options.map((option) => ({ value: option.value, label: option.name }))}>
        </Select>
    )
}

export default Selection;