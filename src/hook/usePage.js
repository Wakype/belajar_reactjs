import React, { useState } from 'react';

function usePage() {
  const [page, setPage] = React.useState(10);
  const [pageSize, setPageSize] = React.useState(1);

  return { page, setPage, pageSize, setPageSize };
}

export default usePage;
