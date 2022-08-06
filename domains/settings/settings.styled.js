import styled from "styled-components"

import SettingsProfile from './components/profile'
import SettingsRecording from './components/recordings'
import SettingStatus from './components/status'
import SettingsStats from './components/stats'

import { responsiveSize } from "@utils/responsive";

export const Container = styled.div`
`

export const Row = styled.div`
  display: flex;

  :not(:last-child) {
    margin-bottom: ${responsiveSize(27)};
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  :first-child {
    margin-right: ${responsiveSize(40)};
  }

  :last-child {
  }
`

export const Profile = styled(SettingsProfile)`
  /* flex: 1; */
`

export const Recording = styled(SettingsRecording)`
  flex: 1;
`

export const Status = styled(SettingStatus)`
  margin-bottom: ${responsiveSize(27)};
`

export const Stats = styled(SettingsStats)`
  flex: 1;
`