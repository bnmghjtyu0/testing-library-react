import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme) => ({
  rootCard: {
    // maxWidth: 345,
  },
  rootChip: {
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'nowrap',
    marginBottom: 4,
    marginLeft: -4,
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}))

export default function ImgMediaCard(props) {
  const classes = useStyles()
  return (
    <Card className={classes.rootCard}>
      <CardContent>
        <div className={classes.rootChip}>
          {props?.tags
            ? props.tags.map((tag, idx) => (
                <Chip
                  size="small"
                  key={idx}
                  // avatar={<Avatar>tag</Avatar>}
                  component="a"
                  href="#chip"
                  clickable
                  label={tag}
                />
              ))
            : null}
        </div>
        <Typography gutterBottom variant="h5" component="h5">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.children}
        </Typography>
      </CardContent>
    </Card>
  )
}
