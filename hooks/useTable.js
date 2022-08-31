import {useMemo, useState, useEffect} from 'react';

import {api} from '@utils/api.util';

export const useTable = ({ entry, query, pageSize = 10, searchKeys, sort}) => {
  const [response, setResponse] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({})

  const pageCount = useMemo(() => {
    return Math.ceil(response?.total / pageSize);
  }, [response?.total, pageSize]);

  useEffect(() => {
    handleLoad();
  }, [page, search, filters, sort]);

  const handleLoad = async () => {
    setLoading(true)

    let _query = {
      $sort: sort || {
        createdAt: -1
      },
      $skip: (page - 1) * pageSize,
      $limit: pageSize,
      ...query,
      ...filters,
    }

    // console.log(search, searchKeys)

    if (searchKeys?.length && search) {
      _query.$or = searchKeys?.map(key => ({
        [key]: {
          $search: search,
        }
      }))
    } 

    // console.log(search)

    // if (search) query.vin = {
    //   $search: search
    // }

    const res = await api.service(entry).find({
      query: _query
    });

    setResponse({...res})
    setLoading(false)
  };
  
  const handleChangePage = (value) => {
    setPage(value)
  }

  const handleChangeSearch = (value) => {
    setPage(1);
    setSearch(value);
  }

  const handleAddItem = (data) => {
    console.log("handleAddItem", data);
    let res = [...response.data];

    res.unshift(data)

    setResponse({...response, data: res});
  }

  return {
    response,
    page,
    pageCount,
    loading,
    search,
    pageSize,
    onChangePage: handleChangePage,
    onSearch: handleChangeSearch,
    onChangeFilters: setFilters,
    onRefreshData: handleLoad,
    onAddItem: handleAddItem
  }
}