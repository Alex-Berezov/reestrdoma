import React from 'react';

import './companiesSelect.scss';

const CompaniesSelect = ({handleSelectedCompany, companiesList}) => {
    return (
        <select onChange={handleSelectedCompany}>
            {
                companiesList &&
                    companiesList.map(company => {
                        return <option 
                            key={company.id}
                            value={company.id}
                            >
                            {company.name}
                        </option>
                    })
            }
        </select>
    );
};

export default CompaniesSelect;