import React from 'react';
import './companyDataTable.scss';

const CompanyDataTable = ({ companyData }) => {
    return (
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
                {
                    companyData &&
                    companyData.map(company => {
                            const date = new Date(company.createdAt);
                            const addZero = (num) => {
                                if (num >= 0 && num <= 9) {
                                    return '0' + num;
                                } else {
                                    return num;
                                }
                            }
                            const editedDate = addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear();
                            
                            return <tr key={company.id}>
                                <td>{company.id}</td>
                                <td>{company.address}</td>
                                <td>{company.reestrFlatCount}</td>
                                <td>{editedDate}</td>
                            </tr>
                        })
                }
            </tbody>
        </table>
    );
};

export default CompanyDataTable;