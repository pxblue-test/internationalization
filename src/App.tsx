import React, {useState} from 'react';
import { useTranslation, Trans } from "react-i18next";
import {
    AppBar,
    Checkbox,
    IconButton,
    List,
    ListItem, ListItemIcon,
    ListItemText,
    MenuItem,
    Select,
    Toolbar,
    Typography
} from "@material-ui/core";


import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CancelIcon from '@material-ui/icons/Cancel';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {makeStyles, useTheme} from "@material-ui/styles";
import * as Colors from '@pxblue/colors';
import {english} from "./resources/english";


const useStyles = makeStyles(() => ({
    header:{
        height: '180px',
        color: 'white',
        background: Colors.blue[500],
        padding: '16px',
    },
    icon:{
        fontSize:'16px',
        margin: '5px'
    },
    listItem:{
        paddingLeft: '15px',
        height: '50px',
        paddingRight: '15px',
        '&:hover':{
            backgroundColor: 'rgba(0, 0, 0, 0.08)'
        }
    }
}));

export const App: React.FC = () => {
    const classes = useStyles(useTheme());
    const { t, i18n } = useTranslation();
    const fruits = english.translations.FRUITS;

    const [selectedItems, setSelectedItems] = useState(new Set<string>());
    const [lang, setLang] = useState('en');

    const changeLanguage = lng => {
        setLang(lng);
        i18n.changeLanguage(lng);
    };

    const select = (fruit: string) => {
        const selected = new Set(selectedItems);
        selected.has(fruit) ? selected.delete(fruit) : selected.add(fruit);
        setSelectedItems(selected);
    };

    const _isRTL = () => lang === 'ar';

    return (
        <div dir={_isRTL() ? 'rtl' : 'ltr'} >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" >
                        {t("I18N")}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Toolbar color="#fff">
                <Select
                    value={lang}
                    onChange={(event) => { changeLanguage(String(event.target.value)) }}
                    style={{ padding: '5px', width: '180px' }}
                >
                    <MenuItem value={'en'}>
                        {t('LANGUAGES.ENGLISH')}
                    </MenuItem>
                    <MenuItem value={'es'}>
                        {t('LANGUAGES.SPANISH')}
                    </MenuItem>
                    <MenuItem value={'de'}>
                        {t('LANGUAGES.GERMAN')}
                    </MenuItem>
                    <MenuItem value={'ar'}>
                        {t('LANGUAGES.ARABIC')}
                    </MenuItem>
                </Select>
            </Toolbar>

            <List >
                { Object.keys(fruits).map((fruit, index) => (
                    <ListItem style={_isRTL() ? { textAlign: 'right' } : null} key={'listItem_' + index} button>
                        <Checkbox checked={selectedItems.has(fruit)} onChange={() => { select(fruit)}} />
                        <ListItemText primary={t(`FRUITS.${fruit}`)} secondary={t("MORE_INFO")} />
                        <ListItemIcon>
                            <ArrowForwardIosIcon className={classes.icon} style={_isRTL() ? { transform: 'scaleX(-1)' } : null} />
                        </ListItemIcon>
                    </ListItem>
                )) }
            </List>

            <footer className={selectedItems.size > 0 ? 'active snackbar' : 'snackbar'} style={_isRTL() ? { paddingRight: '32px', paddingLeft: '4px' } : null}>
                <Typography>
                    {selectedItems.size + " " + t("ITEMS")}
                </Typography>
                <div>
                    <IconButton onClick={() => { setSelectedItems(new Set())}}>
                        <CancelIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </footer>
        </div>
    );
};

