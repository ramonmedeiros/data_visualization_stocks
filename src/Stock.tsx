import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, IconButton } from '@material-ui/core';
import HelpIcon from '@mui/icons-material/Help';

import { get_info, get_key_metrics } from './utils';
import { CompanyProfile, KeyMetrics } from './models';
import Title from './template/Title';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import CustomGrid from './template/CustomGrid';


export default function Stock() {
    const params: { market: string, stock: string } = useParams()
    const [companyProfile, setcompanyProfile] = useState<CompanyProfile>()
    const [keyMetrics, setKeyMetrics] = useState<KeyMetrics[]>()

    useEffect(() => {
        get_info(params.market, params.stock).then(response => {
            if (response !== undefined) {
                let resp = response as CompanyProfile
                setcompanyProfile(resp)
            }
        })
        get_key_metrics(params.market, params.stock, "quarter").then(response => {
            let resp = response as KeyMetrics[];
            if (resp !== undefined) {
                setKeyMetrics(resp)
            }
        })

    }, [params.market, params.stock])


    function showDividends() {
        return (<Grid item>
            <Typography variant="h4" color="inherit">Dividends</Typography>
            <MetricsGraph title="Dividends" dataKey="dividendYield" label="Dividend Ratio" description="Dividends/Stock Price" />
        </Grid>
        )
    }

    function MetricsGraph(props: { title: string, label: string, dataKey: string, description: string }): JSX.Element {
        return (
            <React.Fragment>
                <Typography variant="h6" color="inherit">{props.title}</Typography>
                {/* {props.description} show in a popup with question mark */}
                <LineChart width={300} height={100} data={keyMetrics}>
                    <XAxis dataKey="date" />
                    <YAxis hide />
                    <Line type="monotone" dataKey={props.dataKey} stroke="#8884d8" name={props.label} strokeWidth={2} />
                    <Tooltip />
                </LineChart>
            </React.Fragment>
        )
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <CustomGrid>
                <Title>{params.stock} - {companyProfile?.companyName}</Title>
                <Typography variant="h5" color="inherit">Industry: {companyProfile?.industry}</Typography>
                <br />
                <br />
                <Grid container spacing={4} >
                    <Grid item spacing={5}>
                        <Typography variant="h4" color="inherit">Income and Revenue</Typography>
                        <MetricsGraph title="ROE" dataKey="roe" label="Ratio" description="Profit/Equity" />
                        <MetricsGraph title="EPS" dataKey="earningsYield" label="Ratio" description="Earns per Share" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" color="inherit">Debt and liabilites</Typography>
                        <MetricsGraph title="Debt to Equity" dataKey="debtToEquity" label="Ratio" description="Total Debt/Equity" />
                        <MetricsGraph title="Current Ratio" dataKey="currentRatio" label="Ratio" description="Assets/Liabilities" />
                    </Grid>
                    {showDividends()}
                </Grid>

            </CustomGrid>
        </ResponsiveContainer>
    )
}


