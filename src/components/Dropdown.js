import React, { useEffect, useState, useCallback } from 'react';
import Select from 'react-select';
import { Dropdown } from 'react-bootstrap';
import './components.css';
import { AdminContext } from './Context'
import { filterSearchItem, filterSearchData } from './MockData';

function DropdownNewMenu(props) {
  const { setFilterDatas, setLevelFilter, setCheckSearchData, checkedState, setCheckedState } = React.useContext(AdminContext)
  const [checkSearch, setCheckSearch] = useState(filterSearchItem);
  const [valueBox, setValueBox] = useState('')



  const handleClick = (arg) => {
    props.func(arg)
  }
  const response = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  }
  useEffect(() => {
    const filtersItem = checkedState.map((item, idx) => { if (item === true) { return filterSearchData[idx] } })
    const filterTotal = filtersItem.filter(item => item !== undefined);
    const filterTiming = filterTotal.filter(item => {
      if (item === 'Upcoming' || item === 'Active' || item === 'Past') {
        return item
      }
    });
    const filterLevels = filterTotal.filter(item => {
      if (item === 'Easy' || item === 'Medium' || item === 'Hard') {
        return item
      }
    })
    setCheckSearchData(filterTotal);
    setLevelFilter(filterLevels);
    setFilterDatas(filterTiming)

  }, [checkedState])


  return (<>
    <div className='search-filter' style={(props.dropdownitem === true) ? { width: '290px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' } : { width: '110px', borderRadius: '12px' }} onClick={props.funct}>
      <span className=' start-filter filter-text'>Filter</span>
    </div>
    {props.dropdownItem && <section className='dropdown-section-menu'>

      <form className='form-filter-all' style={{ top: '1500px' }} >
        <p>Search</p>
        <Dropdown.Divider />
        {checkSearch.map((n, i) => <div class=" d-block p-2 bg-none text-grey" key={i}>
          {(i === 4) ? <div><Dropdown.Divider /><p>Level</p></div> : ''}
          <input class="form-check-input" type="checkbox" value={n.name} checked={checkedState[i] || false} name={n.name} id={`${n.name}`} onChange={() => response(i)} />
          <label class="form-check-label" htmlFor={`${n.name}`}> {n.name} </label>
        </div>)}

      </form>

    </section>}
  </>);
}

export default DropdownNewMenu;



