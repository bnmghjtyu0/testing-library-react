import React from 'react'
import Highlight from 'react-highlight.js'
import {FavoriteNumber} from './favorite-number'
import Form from './Form'
import {GreetingLoader} from './greeting-mocking'
import HiddenMessage from './hidden-message'
import {ErrorBoundary} from './error-boundary'
import Bomb from './bomb'
import {reportError} from './service/api'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import MaterialCard from './material-components/card'

export default function App() {
  const [apiResult, setApiResult] = React.useState({success: false})
  const getReport = async () => {
    const report = await reportError((e) => e)
    setApiResult(report)
  }
  React.useEffect(() => {
    getReport()
  }, [])
  return (
    <div className="App">
      <Container spacing={1} style={{paddingTop: 20}}>
        <Grid container spacing={3}>
          <Grid item xs={12} spacing={3}>
            <MaterialCard
              title="<ErrorBoundary> api 回傳錯誤"
              tags={['jest', 'mock', 'ErrorBoundary']}
            >
              <p>使用 ErrorBoundary 防止網頁白屏</p>
              <ErrorBoundary>
                {Object.keys(apiResult).length === 0 ? null : (
                  <Bomb shouldThrow={apiResult.success} />
                )}
              </ErrorBoundary>
            </MaterialCard>
          </Grid>
          <Grid item xs={12} spacing={3}>
            <MaterialCard title="FavoriteNumber" tags={['jest']}>
              <FavoriteNumber />
            </MaterialCard>
          </Grid>
          <Grid item xs={12} spacing={3}>
            <MaterialCard title="Form" tags={['jest']}>
              <Form />
            </MaterialCard>
          </Grid>
          <Grid item xs={12} spacing={3}>
            <MaterialCard title="測試: GreetingLoader" tags={['jest']}>
              <GreetingLoader />
            </MaterialCard>
          </Grid>
          <Grid item xs={12} spacing={3}>
            <MaterialCard title="<react-transition-group>" tags={['jest']}>
              <HiddenMessage />
            </MaterialCard>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
