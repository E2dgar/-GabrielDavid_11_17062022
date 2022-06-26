import React, { useState } from 'react';
import stringToClassName from '../../utils/strings';
import './accordion.css';

const Select = ({ label, panelType }) => {
    const normalizeLabel = stringToClassName(label);

    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const elements = ['option 1', 'option 2', 'option 3'];

    const text =
        "Venez découvrir Paris en séjournant dans ce nid douillet au coeur du 11ème. La vue sur le parc résidentiel saura vous reposer de vos longues journées de tourisme dans la capitale française. Et pour les plus fêtards d'entre vous, la rue Jean Pierre Timbaud vous perm";

    const panelListType = (elements) => {
        return (
            <ul>
                {elements.map((element, index) => (
                    <li key={`${normalizeLabel}-element-${index}`}>
                        {element}
                    </li>
                ))}
            </ul>
        );
    };

    const panelTextType = (text) => <p>{text}</p>;

    const createPanelType = (type) => {
        let panelType;
        switch (type) {
            case 'list':
                panelType = panelListType(elements);
                break;
            default:
                panelType = panelTextType(text);
        }
        return panelType;
    };

    const tooglePanel = () => {
        setIsPanelOpen(!isPanelOpen);
    };

    return (
        <h3 className="heading-panel-wrapper">
            <button
                id={`${normalizeLabel}-accordion`}
                onClick={tooglePanel}
                aria-expanded={isPanelOpen}
                aria-controls={`${normalizeLabel}-panel`}
                className={`${normalizeLabel}-accordion`}>
                {label}
            </button>
            <div
                id={`${normalizeLabel}-panel`}
                className={`panels ${isPanelOpen ? 'show' : ''}`}>
                {createPanelType(panelType)}
            </div>
        </h3>
    );
};

export default Select;
