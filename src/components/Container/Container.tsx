import React, { forwardRef, useEffect, useState } from 'react';
import { IContainerProps, IGenericElementProps, IIndexable } from '../../utils';

export const Element = forwardRef(({ children, className, elementType: ElementType = 'div', ...rest }: IGenericElementProps, ref): JSX.Element => {
  const props = ({ ...rest}) as IIndexable;
  if (className) {
    props.className = className;
  }

  return React.createElement(ElementType, { ...props, ref }, children);
})

export const Container = forwardRef((props: IContainerProps, ref) => {
  const [promised, setPromised] = useState<boolean>(false);
  useEffect(() => {
    return () => {
      setPromised(false);
    }
  }, []);

  const onClick = (e) => {
    if (props.onClick) {
      const evt = props.onClick(e) as any;
      if (evt instanceof Promise) {
        setPromised(true);
        return evt.finally(() => {
          setPromised(false);
          return evt;
        });
      }

      return evt;
    }
  }

  let classNames = [] as string[];
  const dataAttributes = {} as any;
  if (typeof props.className === 'string' && props.className.length > 0) {
    classNames.push(props.className);
  } else if (Array.isArray(props.classNames)) {
    classNames = classNames.concat(props.classNames);
  } else if (Array.isArray(props.classNames)) {
    classNames = props.classNames;
  } else if (Array.isArray(props.className)) {
    classNames = classNames.concat(props.className);
  }

  if (props.loading === true) {
    classNames.push('cool-cats-loading');
  }

  if (Array.isArray(props.states)) {
    props.states.filter((s: any) => {
      return typeof s === 'object';
    }).filter((s: any) => {
      if (Object.keys(s).includes('className')) {
        return s.className.length > 0;
      }

      return true;
    }).forEach((s: any) => {
      const resolveCondition = (attr: string | Function, condition: boolean) => {
        if (typeof attr === 'function') {
          return attr(condition);
        }

        if (condition === true) {
          return attr;
        }

        return '';
      };
      if (s.className) {
        if (typeof s.condition === 'boolean'
          || typeof s.condition === 'function'
        ) {
          const rc = resolveCondition(
            s.className,
            typeof s.condition === 'function' ? s.condition() : s.condition
          );

          if (rc && rc.length > 0) {
            classNames.push(rc);
          }
        } else if (s.className && s.className.length > 0) {
          classNames.push(s.className);
        }
      }
      if (s.attr && s.value) {
        if (typeof s.condition === 'boolean' && s.condition === true) {
          dataAttributes[s.attr] = s.value;
        } else if (typeof s.condition === 'undefined') {
          dataAttributes[s.attr] = s.value;
        } else if (typeof s.condition === 'function') {
          if (s.condition(s.value) === true) {
            dataAttributes[s.attr] = s.value;
          }
        }
      }
    });
  }

  const invalidKeys = [
    'elementType',
    'states',
    'classNames',
    'className',
    'emptyCondition',
    'loading',
    'onClick',
    'invalidProps'
  ].concat(props.invalidProps || []);
  const rest = Object.fromEntries(
    Object.entries(
      props
    ).filter(
      ([key]) => {
        return !invalidKeys.includes(key)
      }
    )
  );

  let ElementType = 'div';
  if (typeof props.elementType === 'string') {
    ElementType = props.elementType;
  } else if (props.href) {
    ElementType = 'a';

    if (props.href.substr(0, 4) === 'http' || props.href.substr(0, 2) === '//') {
      rest.target = '_blank';
    }
  }

  if (props.emptyCondition) {
    return <>{ props.children }</>;
  }

  if (promised) {
    classNames.push('promised');

    if (ElementType === 'button') {
      rest.disabled = "disabled";
    }
  }

  const classNamesFiltered = classNames.filter((cls: string) => cls);

  return (
    <Element elementType={ElementType} className={classNamesFiltered.join(' ')} {...rest} onClick={onClick} {...dataAttributes} ref={ref}>
      { props.children }
    </Element>
  );
})

export default Container;