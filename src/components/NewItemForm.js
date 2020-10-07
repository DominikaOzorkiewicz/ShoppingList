import React, {useState} from 'react';
import {
    Paper,
    Container,
    FormGroup,
    InputLabel,
    TextField,
    Select,
    MenuItem,
    Button,
    createStyles
} from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import {makeStyles} from "@material-ui/core/styles";
import {Product} from "../models/Product";
import {useInput} from "../hooks/useInput";

export const NewItemForm = ({ addProductFn }) => {
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
            tmpErrors.push('Item name must be at least 3 characters long');
        }
        if (isNaN(qty)) {
            tmpErrors.push('Quantity must be a number');
        } else if (qty <= 0) {
            tmpErrors.push('Quantity must be a positive number');
        }
        setErrors(tmpErrors);

        if (tmpErrors.length === 0) {
            const newProduct = new Product(item, qty, unit);
            addProductFn(newProduct);
            setItem('');
            setQuantity('');
            setUnit('item(s)');
        }
    }

    // Custom styles
    const styles = makeStyles(() =>
        createStyles({
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
            }
        })
    );
    const classes = styles();

    // If there are any errors, Alert will be shown
    let errorsJsx = null;
    if (errors.length > 0) {
        errorsJsx = errors.map((err, index) => <Alert key={index} severity='error'>{err}</Alert>)
    }


    return (
        <Paper square elevation={3}>
            <Container maxWidth='md'>
                {errorsJsx}
                <form className={classes.form} onSubmit={handleSubmit}>

                    <FormGroup className={classes.input}>
                        <InputLabel>Item</InputLabel>
                        <TextField {...itemFormParams} />
                    </FormGroup>

                    <FormGroup className={classes.input}>
                        <InputLabel>Quantity</InputLabel>
                        <TextField {...qtyFormParams} />
                    </FormGroup>

                    <FormGroup className={classes.input}>
                        <InputLabel>Unit</InputLabel>
                        <Select
                            className={classes.unitSelect}
                            {...unitFormParams}
                        >
                            <MenuItem value='g'>grams</MenuItem>
                            <MenuItem value='kg'>kilograms</MenuItem>
                            <MenuItem value='l'>liters</MenuItem>
                            <MenuItem value='item(s)'>item(s)</MenuItem>
                        </Select>
                    </FormGroup>

                    <Button type='submit' variant='contained' color='primary'>
                        Add
                    </Button>

                </form>
            </Container>
        </Paper>
    );
}