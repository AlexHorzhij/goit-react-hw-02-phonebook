import PropTypes from 'prop-types';
import {SelectTitle, SelectInput} from './Filter.styled';


export function Filter({ findContact }) {
    return <><SelectTitle> Find contacts by name</SelectTitle> 
        <SelectInput type="text" name="serch" onChange={findContact}/>
          </>
}

Filter.propTypes = {
    findContact: PropTypes.func.isRequired,
};