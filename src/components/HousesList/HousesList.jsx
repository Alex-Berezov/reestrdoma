import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getCompaniesListThunk, getCompanyDataThunk } from '../../api/api';
import { setCompatyId, setPageNumber } from '../../redux/actions/getCompanyData';
import CompaniesSelect from '../CompaniesSelect/CompaniesSelect';
import CompanyDataTable from '../CompanyDataTable/CompanyDataTable';
import Pagination from '../Pagination/Pagination';
import './housesList.scss';

const HousesList = () => {
    const dispatch = useDispatch();

    //Select list
    const companiesList = useSelector(({ getCompaniesList }) => getCompaniesList.companiesList);
    useEffect(() => {
      dispatch(getCompaniesListThunk());
    }, []);

    //Company data
    const {
        companyData,
        companyId,
        pageNumber,
        rowsPerPage
    } = useSelector(({ getCompanyData }) => getCompanyData);
    
    useEffect(() => {
        dispatch(getCompanyDataThunk(companyId, pageNumber, rowsPerPage));
    }, [pageNumber]);

    const handleSelectedCompany = (e) => {
        let company_id = e.target.value;
        dispatch(setCompatyId(company_id));
        dispatch(getCompanyDataThunk(company_id, pageNumber, rowsPerPage));
        dispatch(setPageNumber(1));
    };

    //Pagination
    const totalHousesCount = useSelector(({ getCompanyData }) => 
        getCompanyData.totalHousesCount
    );
    
    const paginate = (pageNumber) => {
        dispatch(setPageNumber(pageNumber));
    };

    return (
        <article className="housesList">
            <div className="wrapper">
                <CompaniesSelect 
                    handleSelectedCompany={handleSelectedCompany} 
                    companiesList={companiesList} 
                />

                <CompanyDataTable companyData={companyData} />
                
                {
                    totalHousesCount > 10 &&
                    <Pagination 
                        totalHousesCount={totalHousesCount}
                        rowsPerPage={rowsPerPage}
                        currentPage={pageNumber}
                        paginate={paginate}
                    />
                }
                
            </div>
        </article>
    );
};

export default HousesList;