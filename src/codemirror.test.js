import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CodeMirror from './codemirror';

beforeEach(() => {
    document.body.createTextRange = function() {
        return {
            setEnd: function(){},
            setStart: function(){},
            getBoundingClientRect: function(){
                return { right: 0 };
            },
            getClientRects: function(){
                return {
                    length: 0,
                    left: 0,
                    right: 0
                }
            }
        }
    }
});

afterEach(() => cleanup());

describe('react-hooks-codemirror tests', () => {
    it('should render without any errors', () => {
        render(<CodeMirror />);
    });
});
