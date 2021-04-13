import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getCompaniesListThunk } from '../../api/api';
import './housesList.scss';

const HousesList = () => {
    const dispatch = useDispatch();
    const companiesList = useSelector(({ getCompaniesList }) => getCompaniesList.companiesList);

    useEffect(() => {
      dispatch(getCompaniesListThunk());
    }, []);

    return (
        <article className="housesList">
            <div className="wrapper">
                <select>
                    {
                        companiesList &&
                            companiesList.map(company => {
                                return <option 
                                    key={company.company_id}
                                    value={company.name}>
                                    {company.name}
                                </option>
                            })
                    }
                </select>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Адрес</th>
                            <th>Кол-во квартир</th>
                            <th>Дата добавления</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Some 1</td>
                            <td>Some 2</td>
                            <td>Some 3</td>
                            <td>Some 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    );
};

export default HousesList;