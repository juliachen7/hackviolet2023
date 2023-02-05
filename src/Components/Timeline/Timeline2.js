import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
        marginLeft: '5%'
    },
    margin: {
        height: theme.spacing(3)
    },
    thumb: {
        background: "navyblue",
        // "&~&": {
        //     background: "green"
        // }
    },
    mark: {
        background: "black"
    },
    rail: {
        background: "linear-gradient(to right, blue, red 50%, green 50%, navy);"
    },
    track: {
        background: "purple"
    },
    valueLabel: {
        "&>*": {
            background: "black"
        }
    }
}));

export default function Timeline2() {
    const classes = useStyles();
    const [value, setValue] = useState([0, 12]);

    const onChange = (e, value) => {
        const [min, max] = value;
        if (max >= 14 && min <= 14 && max !== min) {
            setValue(value);
        }
    };

    return (
        <div className={classes.root}>
            {/*<Typography id="discrete-slider" gutterBottom>*/}
            {/*    Temperature*/}
            {/*</Typography>*/}
            <Slider
                classes={{
                    thumb: classes.thumb,
                    rail: classes.rail,
                    track: classes.track,
                    valueLabel: classes.valueLabel,
                    mark: classes.mark
                }}
                valueLabelDisplay="auto"
                value={value}
                step={1}
                marks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28].map(i => ({
                    label: i,
                    value: i
                }))}
                min={0}
                max={28}
                onChange={onChange}
            />
        </div>
    );
}
