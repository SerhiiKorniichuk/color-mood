import { theme } from 'common/theme'
import { RefAttributes } from 'react'
import Popup from 'reactjs-popup'
import { PopupActions, PopupProps } from 'reactjs-popup/dist/types'
import { hexAlpha } from 'utilities/color'

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
    padding: '10px 10px',
    color: theme.pallete.black,
    fontSize: '0.9em',
    borderRadius: '14px',
    backgroundColor: theme.pallete.white,
    boxShadow: `${hexAlpha(theme.pallete.black, 0.05)} 0 0 0 1px`,
  },
  arrowStyle: {
    color: theme.pallete.white,
    strokeWidth: '2px',
    stroke: hexAlpha(theme.pallete.black, 0.05),
    strokeDasharray: '30px',
    strokeDashoffset: '-54px',
  },
}
