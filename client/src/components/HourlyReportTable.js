import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  palette: {
    type: 'dark',
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function HourlyReportTable(props) {
  const { classes, data } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>
              Group ID
            </CustomTableCell>
            <CustomTableCell>
              Day of the Week
            </CustomTableCell>
            <CustomTableCell>
              Device
            </CustomTableCell>
            <CustomTableCell>
              Hour of Day
            </CustomTableCell>
            <CustomTableCell>
              Customer ID
            </CustomTableCell>
            <CustomTableCell>
              Campaign Name
            </CustomTableCell>
            <CustomTableCell>
              Group Name
            </CustomTableCell>
            <CustomTableCell>
              Network Type
            </CustomTableCell>
            <CustomTableCell>
              Clicks
            </CustomTableCell>
            <CustomTableCell>
              Impressions
            </CustomTableCell>
            <CustomTableCell>
              Click Through Rate
            </CustomTableCell>
            <CustomTableCell>
              Cost
            </CustomTableCell>
            <CustomTableCell>
              Average Cost per Click
            </CustomTableCell>
            <CustomTableCell>
              Average Position
            </CustomTableCell>
            <CustomTableCell>
              Search Impression Share
            </CustomTableCell>
            <CustomTableCell>
              Max Impressions
            </CustomTableCell>
            <CustomTableCell>
              Status
            </CustomTableCell>
            <CustomTableCell>
              Conversions
            </CustomTableCell>
            <CustomTableCell>
              Date
            </CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((number, index) => {
            return (
              <TableRow className={classes.row} key={index}>
                <CustomTableCell component="th" scope="row" numeric>
                  {number.adGroupId}
                </CustomTableCell>
                <CustomTableCell>
                  {number.dayOfWeek}
                </CustomTableCell>
                <CustomTableCell>
                  {number.device}
                </CustomTableCell>
                <CustomTableCell numeric>
                  {number.hourOfDay}
                </CustomTableCell>
                <CustomTableCell numeric>
                  {number.customerId}
                </CustomTableCell>
                <CustomTableCell>
                  {number.campaignName}
                </CustomTableCell>
                <CustomTableCell>
                  {number.adGroupName}
                </CustomTableCell>
                <CustomTableCell>
                  {number.adNetworkType}
                </CustomTableCell>
                <CustomTableCell numeric>
                  {number.clicks}
                </CustomTableCell>
                <CustomTableCell numeric>
                  {number.impressions}
                </CustomTableCell>
                <CustomTableCell numeric>
                  {number.ctr}
                </CustomTableCell>
                <CustomTableCell numeric>
                  {number.cost}
                </CustomTableCell>
                <CustomTableCell numeric>
                  {number.avgCpc}
                </CustomTableCell>
                <CustomTableCell numeric>
                  {number.avgPosition}
                </CustomTableCell>
                <CustomTableCell numeric>
                  {number.searchImpressionShare}
                </CustomTableCell>
                <CustomTableCell numeric>
                  {number.maxImpressions}
                </CustomTableCell>
                <CustomTableCell>
                  {number.campaignStatus}
                </CustomTableCell>
                <CustomTableCell numeric>
                  {number.conversions}
                </CustomTableCell>
                <CustomTableCell>
                  {number.date}
                </CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

HourlyReportTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HourlyReportTable);
