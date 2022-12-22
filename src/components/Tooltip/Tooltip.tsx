import { theme } from 'common/theme'
import { RefAttributes } from 'react'
import Popup from 'reactjs-popup'
import { PopupActions, PopupProps } from 'reactjs-popup/dist/types'

type TooltipProps = PopupProps & RefAttributes<PopupActions>

export function Tooltip({ children, ...props }: TooltipProps) {
  return <Popup {...props}>{children}</Popup>
}

Tooltip.defaultProps = {
  on: ['hover'],
  position: ['top center'],
  offsetY: 5,
  mouseEnterDelay: 750,
  mouseLeaveDelay: 0,
  contentStyle: {
    padding: '7px 10px',
    color: theme.pallete.black,
    fontSize: '0.9em',
    borderRadius: '7px',
    border: `1px solid ${theme.pallete.white}`,
    backgroundColor: theme.pallete.white,
  },
  arrowStyle: {
    zIndex: 0,
    strokeWidth: '2px',
    stroke: theme.pallete.white,
    strokeDasharray: '30px',
    strokeDashoffset: '-54px',
    color: theme.pallete.white,
  },
}
