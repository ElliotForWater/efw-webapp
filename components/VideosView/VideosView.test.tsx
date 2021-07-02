import React from 'react'
import { shallow } from 'enzyme'
import VideosView from './VideosView'
import { render, screen } from '@testing-library/react'
import VIDEOS from '../../__mocks__/videoApi.json'

describe('VideosView', () => {
  it('should render without throwing an error', function () {
    const wrap = shallow(<VideosView videos={VIDEOS} query='madonna' />)
    expect(wrap).toBeDefined()
  })

  it('should render all videos results', function () {
    render(<VideosView videos={VIDEOS} query='madonna' />)
    const img = screen.getAllByRole('link')
    expect(img.length).toBe(116)
  })
})
