import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    AppBar,
    Button,
    Checkbox,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Select,
    Toolbar,
    Typography,
} from '@material-ui/core';

import BoltIcon from '@material-ui/icons/OfflineBolt';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CartIcon from '@material-ui/icons/ShoppingCart';
import CancelIcon from '@material-ui/icons/Cancel';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import FolderIcon from '@material-ui/icons/Folder';
import ErrorIcon from '@material-ui/icons/Error';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import * as Colors from '@pxblue/colors';
import { english } from './resources/english';
import { InfoListItem } from '@pxblue/react-components';

const useStyles = makeStyles(() => ({
    drawer: {
        maxWidth: '85%',
        width: 350,
    },
    header: {
        height: '180px',
        color: 'white',
        background: Colors.blue[500],
        padding: '16px',
    },
    snackbar: {
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: 1,
    },
    icon: {
        fontSize: '16px',
        margin: '4px',
    },
    listItem: {
        paddingLeft: '156x',
        height: '48px',
        paddingRight: '24px',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
        },
    },
}));

export const App: React.FC = () => {
    const classes = useStyles(useTheme());
    const { t, i18n } = useTranslation();
    const fruits = english.translations.FRUITS;
    const menuItems = english.translations.MENU_ITEMS;

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState(new Set<string>());
    const [lang, setLang] = useState('en');
    const isRTL = (): boolean => lang === 'ar';
    const getDirection = (): string => (isRTL() ? 'rtl' : 'ltr');

    const changeLanguage = useCallback(
        (lng) => {
            setLang(lng);
            i18n.changeLanguage(lng);
        },
        [i18n]
    );

    useEffect(() => {
        changeLanguage('en');
    }, [changeLanguage]);

    const selectFruit = (fruit: string): void => {
        const selected = new Set(selectedItems);
        selected.has(fruit) ? selected.delete(fruit) : selected.add(fruit);
        setSelectedItems(selected);
    };

    const getDrawer = (): ReactNode => {
        const iconArray = [<HomeIcon />, <FolderIcon />, <ErrorIcon />, <SettingsIcon />, <HelpIcon />];
        return (
            <Drawer
                open={drawerOpen}
                onClose={(): void => setDrawerOpen(!drawerOpen)}
                classes={{ paper: classes.drawer }}
                anchor={isRTL() ? 'right' : 'left'}
            >
                <div className={'flexVert'} style={{ height: '100%', width: '100%' }}>
                    <div dir={getDirection()} className={`flexVertBottom ${classes.header}`}>
                        <BoltIcon style={{ fontSize: '64px', transform: 'rotate(42deg)' }} />
                        <div style={{ padding: '4px' }}>
                            <Typography variant="subtitle1" color="inherit" style={{ lineHeight: '1rem' }}>
                                PX {t('BLUE')}
                            </Typography>
                            <Typography variant="subtitle1" color="inherit" style={{ lineHeight: '1rem' }}>
                                {t('I18N')}
                            </Typography>
                        </div>
                    </div>
                    <div style={{ flex: '1 1 0px', overflowY: 'auto' }}>
                        <List dir={getDirection()} style={{ padding: '0px' }}>
                            {Object.keys(menuItems).map((menuItem, index) => (
                                <ListItem
                                    button
                                    style={isRTL() ? { textAlign: 'right' } : null}
                                    className={classes.listItem}
                                    key={menuItem}
                                    onClick={(): void => setDrawerOpen(!drawerOpen)}
                                >
                                    <ListItemIcon>
                                        <div style={isRTL() ? { transform: 'scaleX(-1)' } : null}>
                                            {' '}
                                            {iconArray[index]}
                                        </div>
                                    </ListItemIcon>
                                    <ListItemText primary={t(`MENU_ITEMS.${menuItem}`)} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </div>
            </Drawer>
        );
    };

    return (
        <div dir={getDirection()}>
            <AppBar position="static">
                {getDrawer()}
                <Toolbar>
                    <IconButton color="inherit" onClick={(): void => setDrawerOpen(!drawerOpen)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        {t('I18N')}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Toolbar color="#fff">
                <Select
                    value={lang}
                    onChange={(event): void => changeLanguage(String(event.target.value))}
                    style={{ padding: 4, width: 180, marginLeft: 4 }}
                >
                    <MenuItem value={'en'}>{t('LANGUAGES.ENGLISH')}</MenuItem>
                    <MenuItem value={'es'}>{t('LANGUAGES.SPANISH')}</MenuItem>
                    <MenuItem value={'de'}>{t('LANGUAGES.GERMAN')}</MenuItem>
                    <MenuItem value={'ar'}>{t('LANGUAGES.ARABIC')}</MenuItem>
                    <MenuItem value={'fr'}>{t('LANGUAGES.FRENCH')}</MenuItem>
                    <MenuItem value={'pt'}>{t('LANGUAGES.PORTUGUESE')}</MenuItem>
                    <MenuItem value={'zh'}>{t('LANGUAGES.CHINESE')}</MenuItem>
                </Select>
                <Button variant="contained" color="primary" style={{ margin: '10px', textTransform: 'none' }}>
                    <CartIcon className={classes.icon} style={isRTL() ? { transform: 'scaleX(-1)' } : null} />
                    <Typography noWrap color="inherit">
                        {t('ADD_TO_CART')}
                    </Typography>
                </Button>
            </Toolbar>

            <List>
                {Object.keys(fruits).map((fruit, index) => (
                    <InfoListItem
                        key={index}
                        onClick={() => selectFruit(fruit)}
                        ripple={true}
                        style={{ textAlign: isRTL() ? 'right' : 'left' }}
                        title={t(`FRUITS.${fruit}`)}
                        subtitle={t('MORE_INFO')}
                        icon={
                            <Checkbox
                                checked={selectedItems.has(fruit)}
                                onChange={(): void => selectFruit(fruit)}
                            />
                        }
                        rightComponent={
                            <ArrowForwardIosIcon
                                className={classes.icon}
                                style={isRTL() ? { transform: 'scaleX(-1)' } : null}
                            />
                        }
                    />
                ))}
            </List>

            <footer
                className={selectedItems.size > 0 ? `active ${classes.snackbar}` : `${classes.snackbar}`}
                style={isRTL() ? { paddingRight: '32px', paddingLeft: '4px' } : null}
            >
                <Typography>{`${selectedItems.size} ${t('ITEMS')}`}</Typography>
                <div>
                    <IconButton
                        onClick={(): void => {
                            setSelectedItems(new Set());
                        }}
                    >
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
