import React, { useMemo } from 'react'

import CabinetMenuView from "./cabinet-menu.view"

import { useRouter } from 'next/router'

export default function TopLineMenuContainer({...props}) {
  const router = useRouter();

  return (
    <CabinetMenuView {...props} activeRoute={router.asPath} />
  )
}
