import React, { useState, useMemo } from 'react';
import { calculatePlanetaryPositions } from '../utils/ephemeris';
import { getGeneralAspectInterpretation, GeneralAspectInterpretation } from '../utils/generalAspectInterpretations';
