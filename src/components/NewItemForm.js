import React, {useState} from 'react';
import {
    Paper,
    FormGroup,
    InputLabel,
    TextField,
    Select,
    MenuItem,
    Button,
} from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import {makeStyles} from "@material-ui/core/styles";
import {Product} from "../models/Product";
import {useInput} from "../hooks/useInput";

export const NewItemForm = ({ addProductFn, t }) => {
    const [item, setItem, itemFormParams] = useInput('');
    const [quantity, setQuantity, qtyFormParams] = useInput('');
    const [unit, setUnit, unitFormParams] = useInput('item(s)');
    const [errors, setErrors] = useState([]);

    // Form submit event with errors handling
    const handleSubmit = event => {
        event.preventDefault();
        const tmpErrors = [];
        const qty = Number(quantity);

        if (item.trim().length < 3) {
            tmpErrors.push(t("error.type1"));
        }
        if (isNaN(qty)) {
            tmpErrors.push(t("error.type2"));
        } else if (qty <= 0) {
            tmpErrors.push(t("error.type3"));
        }
        setErrors(tmpErrors);

        if (tmpErrors.length === 0) {
            const newProduct = new Product(item, qty, unit);
            addProductFn(newProduct);
            setItem('');
            setQuantity('');
            setUnit(t("label.unitType.items"));
        }
    }

    // Custom styles
    const useStyles = makeStyles((theme) => ({
        toolbar: {
            // Necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
        },
        form: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '10px'
        },
        input: {
            margin: '10px 20px',
        },
        unitSelect: {
            minWidth: '100px'
        },
    }));
    const classes = useStyles();

    // If there are any errors, Alert will be shown
    let errorsJsx = null;
    if (errors.length > 0) {
        errorsJsx = errors.map((err, index) => <Alert key={index} severity='error'>{err}</Alert>)
    }


    return (
        <>
            <div className={classes.toolbar} />
            <Paper square elevation={3} className={classes.content} >
                {errorsJsx}
                <form className={classes.form} onSubmit={handleSubmit}>

                    <FormGroup className={classes.input}>
                        <InputLabel>
                            {t("label.item")}
                        </InputLabel>
                        <TextField {...itemFormParams} />
                    </FormGroup>

                    <FormGroup className={classes.input}>
                        <InputLabel>
                            {t("label.quantity")}
                        </InputLabel>
                        <TextField {...qtyFormParams} />
                    </FormGroup>

                    <FormGroup className={classes.input}>
                        <InputLabel>
                            {t("label.unit")}
                        </InputLabel>
                        <Select
                            className={classes.unitSelect}
                            {...unitFormParams}
                        >
                            <MenuItem value='g'>
                                {t("label.unitType.grams")}
                            </MenuItem>
                            <MenuItem value='kg'>
                                {t("label.unitType.kilograms")}
                            </MenuItem>
                            <MenuItem value='l'>
                                {t("label.unitType.liters")}
                            </MenuItem>
                            <MenuItem value={t("label.unitType.items")}>
                                {t("label.unitType.items")}
                            </MenuItem>
                        </Select>
                    </FormGroup>

                    <Button type='submit' variant='contained' color='primary'>
                        {t("button.add")}
                    </Button>

                </form>
            </Paper>
        </>
    );
}