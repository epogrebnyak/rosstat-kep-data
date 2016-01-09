"""
- TODO fiscal rows - NEW FEATURE
- TODO export to xls + plotting
- LATER add database?
- MAYDO common interface for init: dir, csv, files
  -- one variable can be a dir or single csv or string
  -- two variables are either csv + spec - vars or files
  -- three variables are csv + spec + cfg  
 
  

- TODO anything else to final testing with test_mwe and second end-to-end test?
  -- DONE dfq, dfm 
  -- DONE read all labels, get_all_varnames form rowsystem 
  -- TODO read all labels from specs
  
- LATER code review
- LATER classes
  class SegmentDefinition  
     sd = SegmentDefinition(yaml)
     sd.as_dict() 
  
  -- class UserDefinition - can init by yaml files or by variables
     UserDefinition(csv, spec, cfg)
     UserDefinition(folder)     
     must return/make available  csv_input_as_string, default_spec and segments
     
     
  -- class RowSystem
  
- LATER clean txt files in tests
- MAYDO init from folder - is.folder()
- MAYDO splitting of file to modules  
- MAYDO get_nondata_rows - fo file inspection 

- DONE large test
- DONE read as csv file
- DONE read and assign dicts by segments
- DONE load_csg, load_spec + change in format

- NODO mwe test
- NODO ask about df comparison and reshaping

задания:
- 3 раздел

альтернативные источники:
- brent
- customs
- ПБ
- regional stats
- SNA rosstat
"""

# --- classes ---

#rs = RowSystem(csv_input) # read raw csv into class instance
#rs.label(dicts) #add lables to csv rows based on dicts  
#rs.label(dicts, segments) #add lables to csv rows based on core dicts and segments information
#dfa = rs.dfa( # get annual dataframe from labelled rows
#dfq = rs.dfq() # get quarterly dataframe from labelled rows
#dfm = rs.dfm() # get monthly dataframe from labelled rows


'''
class RowSystem:

   def __init__(self, doc):
       # parse dataframe
       self.dataframe = # parsed dataframe

   def label(self, dicts):
       # Process self.dataframe
       self.dataframe = # replace self.dataframe

   def annual(self):
       # same as label
'''


"""Test-driven development of CSV file reader with user-defined specification for variable names.   

The reader must produce a pandas dataframe from CSV file based on user-defined specification. The reader attempts 
to label data rows in CSV file with variable names (method *label_rowsystem*), read qualified labelled rows to 
database (omitted in this example) and create resulting dataframe (method *get_annual_df_from_rowsystem*).

    Output: 
        GDP_DF - pandas dataframe with reference data
        
    Input:
        DOC - a string mimicing CSV file contents
        header_dict, unit_dict - a tuple of dictionaries used to parse table headers in CSV file 
                                 to obtain variable names for each data row.

    Methods:
        doc_to_rowsystem(doc)    
        label_rowsystem(rs, dicts)
        get_annual_df_from_rowsystem(rs)    

Algorithm assumptions: 
- data rows in CSV file start with year, e.g  '2014'
- data rows are preceeded with text rows containing headers with text description of variables and units of measurement 
- variable text description is linked to variable headname (e.g. 'GDP', 'SOC_WAGE')
- text containing unit of measurement is parsed to variable units (e.g. 'bln_rub', 'yoy', 'rog')
- in CSV file each variable is usually presented with several units of measurement: levels and 
  different kinds of rates of growth

Naming convention:
- variable headname is written in CAPITAL letters (e.g. 'GDP', 'SOC_WAGE')
- variable unit is written in lowercase letters (e.g. 'bln_rub', 'yoy', 'rog')
- time series label is a combination of variable headname and unit (e.g. 'GDP_bln_rub')

The file contains following sections:
# --- hardcoded constrants ---
# --- methods --- 
# --- testing ---

Not todo now:
- extend DICTS to have segment information
- move all code to this file or keep as package?
- may add explicit location of variables in headers
- use one parser function
"""

"""    Working on a rowsystem facilitates parsing data rows and makes parser 
       code more organised.
"""


#-----------------------------
import yaml

segment_info_yaml_string = """
start line : null
end line : null
special reader: null"""

segment_info_dict = {
#  'default specification': True,  
  'start line' : None,
  'end line' : None,
  'special reader': 'read_special'}

assert yaml.load(segment_info_yaml_string) == segment_info_dict
#-----------------------------  
